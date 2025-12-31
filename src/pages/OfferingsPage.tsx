import { useQuery } from "@tanstack/react-query";
import { fetchOfferingsFromExcel } from "@/lib/offeringsData";
import { OfferingCard } from "@/components/OfferingCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const OfferingsPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const { data, isLoading } = useQuery({
    queryKey: ["offerings-excel"],
    queryFn: () => fetchOfferingsFromExcel(),
    staleTime: 1000 * 60 * 5,
  });

  const offerings = data || [];
  
  // Pagination Logic
  const totalPages = Math.ceil(offerings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOfferings = offerings.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionChange = (section: string) => {
      navigate("/");
      // Use a timeout to allow navigation to complete before scrolling
      setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
             const headerHeight = 80;
             const elementPosition = element.offsetTop - headerHeight;
             window.scrollTo({ top: elementPosition, behavior: "smooth" });
          }
      }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection="offerings" onSectionChange={handleSectionChange} />
      <main className="pt-24 pb-20">
         <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16 animate-fade-up">
                <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">All Programs</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Explore our complete range of educational programs
                </p>
            </div>

            {isLoading && (
              <div className="text-center mb-8 text-muted-foreground">Loading offerings...</div>
            )}
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {currentOfferings.map((offering, index) => (
                <OfferingCard key={index} offering={offering} index={index} />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) handlePageChange(currentPage - 1);
                      }}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                        href="#"
                        isActive={currentPage === i + 1}
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(i + 1);
                        }}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext 
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) handlePageChange(currentPage + 1);
                      }}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
         </div>
      </main>
      <Footer />
    </div>
  );
};

export default OfferingsPage;
