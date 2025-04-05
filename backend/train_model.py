import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import joblib

# Load example breast cancer dataset
from sklearn.datasets import load_breast_cancer
data = load_breast_cancer()

X = pd.DataFrame(data.data, columns=data.feature_names)
y = data.target

# You may want to select only the 6 fields you use in the frontend
selected_features = [
    "mean radius", "mean texture", "mean perimeter", 
    "mean area", "mean smoothness", "mean compactness"
]
X = X[selected_features]

# Train/test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save model
joblib.dump(model, 'model.pkl')
print("✅ model.pkl saved successfully!")
