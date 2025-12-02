import Header from "@/components/Header";
import Hero from "../components/Hero";




const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        {/* <About />
        <Services />
        <Testimonials />
        <Contact /> */}
      </main>  
      {/* <Footer /> */}
    </div>
  );
};

export default Index;