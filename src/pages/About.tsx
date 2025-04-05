
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AlertTriangle, ArrowRight, CheckCircle2, Info } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4 max-w-6xl">
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl font-bold">About The Project</h1>
        <p className="text-lg text-muted-foreground">
          Using machine learning to improve early detection of breast cancer
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
        <div className="md:col-span-3 space-y-6">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p>
            BreastAware aims to leverage machine learning technologies to improve the accuracy and accessibility
            of breast cancer detection. Early diagnosis is key to successful treatment, and our project
            brings together medical expertise with state-of-the-art technology to support healthcare providers
            in identifying potential cases earlier.
          </p>
          <h3 className="text-xl font-semibold mt-6">Technology Stack</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
              <span><strong>scikit-learn:</strong> For building and training our machine learning models</span>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
              <span><strong>pandas:</strong> For data manipulation and analysis</span>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
              <span><strong>numpy:</strong> For numerical operations and array handling</span>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
              <span><strong>Flask:</strong> For creating the API that powers our detection service</span>
            </li>
          </ul>
          <div className="flex gap-4 mt-8">
            <Button asChild>
              <Link to="/detector">Try Our Detector <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/team">Meet The Team</Link>
            </Button>
          </div>
        </div>
        <div className="md:col-span-2 bg-card rounded-lg p-6 border border-border h-fit shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Project Impact</h3>
          <ul className="space-y-4">
            <li className="flex gap-4 items-start">
              <div className="mt-1 bg-primary/10 p-1.5 rounded-full">
                <Info className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium">Improved Detection Rates</p>
                <p className="text-sm text-muted-foreground">Our models have shown a 95% accuracy rate in preliminary testing</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="mt-1 bg-primary/10 p-1.5 rounded-full">
                <Info className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium">Accessibility</p>
                <p className="text-sm text-muted-foreground">Web-based tool makes advanced detection techniques available to more practitioners</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="mt-1 bg-primary/10 p-1.5 rounded-full">
                <Info className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium">Ongoing Research</p>
                <p className="text-sm text-muted-foreground">Continuous model improvement through new data and advanced techniques</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Separator className="my-12" />

      <div className="space-y-8">
        <h2 className="text-3xl font-semibold">About Breast Cancer</h2>
        
        <div className="bg-primary/10 p-5 rounded-lg border border-primary/20 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Important Note</h3>
              <p className="text-sm">
                This website and its detector are educational tools and not intended to replace professional medical advice, 
                diagnosis, or treatment. Always consult qualified healthcare providers with questions about breast cancer or any medical condition.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Warning Signs</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                <span>A new lump or mass in the breast or underarm</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                <span>Swelling of all or part of the breast</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                <span>Skin irritation or dimpling</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                <span>Breast or nipple pain</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                <span>Nipple retraction (turning inward)</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                <span>Redness, scaliness, or thickening of the nipple or breast skin</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                <span>Nipple discharge (other than breast milk)</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Risk Factors</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                <span>Being a woman and increasing age</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                <span>Family history of breast cancer</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                <span>Genetic mutations (BRCA1 and BRCA2)</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                <span>Previous radiation therapy</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                <span>Hormone replacement therapy</span>
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                <span>Dense breast tissue</span>
              </li>
            </ul>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is machine learning's role in cancer detection?</AccordionTrigger>
            <AccordionContent>
              Machine learning can help identify patterns in medical data that might be missed by human analysis. 
              By training models on thousands of samples, algorithms can learn to spot subtle indicators of cancer 
              and potentially improve early detection rates. Our project specifically uses supervised learning 
              techniques with scikit-learn to analyze breast cancer data features.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How accurate is machine learning for breast cancer detection?</AccordionTrigger>
            <AccordionContent>
              Modern machine learning models can achieve accuracy rates of over 90% in classifying benign versus 
              malignant breast tumors, based on features extracted from medical images or clinical data. However, 
              these tools are designed to support, not replace, medical professionals. The combination of human 
              expertise and machine learning analysis provides the best outcomes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What data is used to train these models?</AccordionTrigger>
            <AccordionContent>
              Our models are trained using anonymized medical datasets that include features such as cell nuclei 
              characteristics, texture measurements, and other relevant medical parameters. We use public datasets 
              like the Wisconsin Breast Cancer Dataset, which contains measurements from fine needle aspirates of 
              breast masses. This data is processed using pandas and numpy before training our models.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default About;
