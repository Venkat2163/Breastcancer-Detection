import streamlit as st
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
from googletrans import Translator

# --- Backend (Python) ---

@st.cache_resource
def load_tokenizer(model_name):
    return AutoTokenizer.from_pretrained(model_name)

@st.cache_resource
def load_translation_model(model_name):
    return AutoModelForSeq2SeqLM.from_pretrained(model_name)

@st.cache_resource
def load_google_translator():
    return Translator()

def tokenize_text(text, tokenizer):
    tokens = tokenizer.tokenize(text)
    return tokens

def translate_tokens(tokens, target_language_code, translator):
    translated_tokens = []
    for token in tokens:
        try:
            translation = translator.translate(token, dest=target_language_code)
            translated_tokens.append(translation.text)
        except Exception as e:
            translated_tokens.append(f"[Translation Error: {e}]")
    return translated_tokens

def translate_text_with_model(text, model, tokenizer, target_language_code):
    inputs = tokenizer(text, return_tensors="pt", padding=True, truncation=True)
    generated_tokens = model.generate(**inputs, forced_bos_token_id=tokenizer.lang_code_to_id[target_language_code])
    translated_text = tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)[0]
    return translated_text

# --- Frontend (Streamlit) ---

st.title("NLP Tokenization and Language Conversion")

input_text = st.text_area("Enter text:", "This text will be tokenized and converted.")

tokenizer_model_name = st.selectbox(
    "Select Tokenization Model:",
    ["bert-base-uncased", "gpt2"]
)

target_language = st.selectbox(
    "Select Target Language:",
    ["English", "Hindi", "Spanish", "French", "German", "Chinese", "Japanese"]
)

language_code_map = {
    "English": "en",
    "Hindi": "hi",
    "Spanish": "es",
    "French": "fr",
    "German": "de",
    "Chinese": "zh-CN",
    "Japanese": "ja"
}
target_language_code = language_code_map.get(target_language)

translation_method = st.radio(
    "Select Translation Method:",
    ["Translate Individual Tokens (Google Translate)", "Translate Entire Text (Transformer Model)"]
)

translation_model_name = None
if translation_method == "Translate Entire Text (Transformer Model)":
    translation_model_name = st.selectbox(
        "Select Translation Model for Entire Text:",
        ["Helsinki-NLP/opus-mt-en-hi", "Helsinki-NLP/opus-mt-en-es", "Helsinki-NLP/opus-mt-en-fr"]
    )

if st.button("Process"):
    if input_text and target_language_code:
        tokenizer = load_tokenizer(tokenizer_model_name)
        tokens = tokenize_text(input_text, tokenizer)
        st.subheader("Original Tokens:")
        st.write(tokens)

        st.subheader(f"Converted Tokens to {target_language}:")
        if translation_method == "Translate Individual Tokens (Google Translate)":
            translator = load_google_translator()
            translated_tokens = translate_tokens(tokens, target_language_code, translator)
            st.write(translated_tokens)
        elif translation_method == "Translate Entire Text (Transformer Model)":
            if translation_model_name:
                try:
                    translation_model = load_translation_model(translation_model_name)
                    translated_text = translate_text_with_model(input_text, translation_model, tokenizer, target_language_code)
                    st.write(translated_text)
                except Exception as e:
                    st.error(f"Error during transformer model translation: {e}")
            else:
                st.warning("Please select a translation model for translating the entire text.")
    else:
        st.warning("Please enter text and select a target language.")