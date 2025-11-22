import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const feedbackImages = [
  "/edfirst-data/feedback/feedback_1.png",
  "/edfirst-data/feedback/feedback_2.png",
  "/edfirst-data/feedback/feedback_3.png",
  "/edfirst-data/feedback/feedback_4.png",
  "/edfirst-data/feedback/feedback_5.png",
  "/edfirst-data/feedback/feedback_6.png",
  "/edfirst-data/feedback/feedback_7.png",
];

const FeedbackSection = () => {
  const [index, setIndex] = useState(0);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + feedbackImages.length) % feedbackImages.length);
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % feedbackImages.length);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % feedbackImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="feedback" className="py-20 bg-gradient-to-br from-accent-light/5 to-primary-light/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Feedback</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Highlights and testimonials from our programs and partners
          </p>
          <div className="w-24 h-1 bg-gradient-accent rounded-full mx-auto mt-4"></div>
        </div>

        {/* Slider */}
        <Card className="shadow-medium border-0 bg-gradient-to-br from-white to-accent-light/5">
          <CardContent className="p-4">
            <div className="relative">
              <div className="flex items-center justify-center">
                <img
                  src={feedbackImages[index]}
                  alt={`Feedback ${index + 1}`}
                  className="w-full max-h-[70vh] object-contain rounded-lg shadow-soft"
                />
              </div>

              {/* Controls */}
              <div className="absolute inset-y-1/2 -translate-y-1/2 left-2 right-2 flex justify-between">
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={prev} aria-label="Previous slide">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full" onClick={next} aria-label="Next slide">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Indicators */}
              <div className="mt-4 flex justify-center gap-2">
                {feedbackImages.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 w-2 rounded-full ${i === index ? "bg-primary" : "bg-muted"}`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeedbackSection;