
import { ArrowRight, BarChart3, Heart, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Early Detection <span className="text-gradient">Saves Lives</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-muted-foreground">
            Using machine learning to improve breast cancer detection and diagnostic accuracy
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="animate-fade-in">
              <Link to="/detector">
                Try Our Detector <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="animate-fade-in">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Breast Cancer: The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-8 text-center shadow-sm border border-border">
              <p className="text-4xl font-bold text-primary mb-2">1 in 8</p>
              <p className="text-muted-foreground">Women will develop breast cancer in their lifetime</p>
            </div>
            <div className="bg-card rounded-lg p-8 text-center shadow-sm border border-border">
              <p className="text-4xl font-bold text-primary mb-2">99%</p>
              <p className="text-muted-foreground">5-year survival rate with early detection</p>
            </div>
            <div className="bg-card rounded-lg p-8 text-center shadow-sm border border-border">
              <p className="text-4xl font-bold text-primary mb-2">44,000+</p>
              <p className="text-muted-foreground">Lives saved annually through early detection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="mb-4 p-2 bg-primary/10 w-fit rounded-full">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Advanced Detection</h3>
                <p className="text-muted-foreground">
                  Our machine learning models analyze medical data to identify potential cancer markers with high precision.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/detector" className="text-primary hover:text-primary/80 flex items-center">
                  Try It Now <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="mb-4 p-2 bg-primary/10 w-fit rounded-full">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Data-Driven Insights</h3>
                <p className="text-muted-foreground">
                  Using sklearn, pandas, and numpy to process large datasets and extract meaningful patterns.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/about" className="text-primary hover:text-primary/80 flex items-center">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="mb-4 p-2 bg-primary/10 w-fit rounded-full">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Supporting Women</h3>
                <p className="text-muted-foreground">
                  Empowering women with knowledge and tools for early detection and proactive health management.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/team" className="text-primary hover:text-primary/80 flex items-center">
                  Our Team <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
