import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertCircle, Info, Upload } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Detector = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [filename, setFilename] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    radius_mean: "",
    texture_mean: "",
    perimeter_mean: "",
    area_mean: "",
    smoothness_mean: "",
    compactness_mean: ""
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFilename(selectedFile.name);
    }
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please select a file to upload",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/predict_csv", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      const results = data.results || [];
      const formattedResult = Array.isArray(results) ? results.join(', ') : results.toString();

      setResult(formattedResult || "Success: Analysis complete.");
      toast({
        title: "Analysis Complete",
        description: formattedResult || "File processed successfully.",
      });
    } catch (error) {
      toast({
        title: "Upload Failed",
        description: "Something went wrong while uploading.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setResult(data.result || "Prediction complete.");
      toast({
        title: "Analysis Complete",
        description: data.result || "Form data processed successfully.",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Something went wrong with the prediction.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-6xl">
      <h1 className="text-4xl font-bold mb-2">Breast Cancer Detector</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Use our machine learning model to help detect potential breast cancer indicators.
      </p>

      <div className="bg-card/50 p-4 rounded-lg border border-border mb-8 flex items-center">
        <Info className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
        <p className="text-sm">
          This tool is for educational purposes only. Always consult with healthcare professionals for medical advice and diagnosis.
        </p>
      </div>

      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid grid-cols-2 mb-8">
          <TabsTrigger value="upload">Upload Data</TabsTrigger>
          <TabsTrigger value="input">Manual Input</TabsTrigger>
        </TabsList>

        {/* File Upload Tab */}
        <TabsContent value="upload" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle>Upload Medical CSV File</CardTitle>
              <CardDescription>
                Upload a CSV file with medical parameters for analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUploadSubmit} className="space-y-6">
                <div
                  className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:bg-secondary/50 transition-colors"
                  onClick={() => document.getElementById('file-upload')?.click()}
                >
                  <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground">Supported format: CSV</p>
                  {filename && <p className="mt-2 text-sm font-medium">{filename}</p>}
                  <Input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept=".csv"
                    onChange={handleFileChange}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Processing...' : 'Analyze'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Manual Input Tab */}
        <TabsContent value="input" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle>Enter Medical Parameters</CardTitle>
              <CardDescription>Input medical parameters manually for analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(formData).map(([key, value]) => (
                    <div className="space-y-2" key={key}>
                      <Label htmlFor={key}>
                        {key.replace("_", " ").replace(/\b\w/g, c => c.toUpperCase())}
                      </Label>
                      <Input
                        id={key}
                        type="number"
                        step="any"
                        placeholder="Enter value"
                        value={value}
                        onChange={handleFormChange}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex items-center p-3 bg-secondary rounded-lg">
                  <AlertCircle className="h-5 w-5 text-primary mr-2" />
                  <p className="text-sm">
                    These are sample fields. Include all relevant parameters in production.
                  </p>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Processing...' : 'Analyze'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Result Display */}
      {result && (
        <div className="mt-12 bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Result</h2>
          <p className="text-lg">{result}</p>
        </div>
      )}
    </div>
  );
};

export default Detector;
