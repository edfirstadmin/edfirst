import { BarChart3, Users, BookOpen, Lightbulb, GraduationCap, type LucideIcon } from "lucide-react";
import * as XLSX from "xlsx";

export interface OfferingItem {
  title: string;
  icon: LucideIcon;
  color: string;
  description: string;
  features: string[];
}

const ICON_MAP: Record<string, LucideIcon> = {
  "BarChart3": BarChart3,
  "Users": Users,
  "BookOpen": BookOpen,
  "Lightbulb": Lightbulb,
  "GraduationCap": GraduationCap,
};

const DEFAULT_ICON = BarChart3;

export const fetchOfferingsFromExcel = async (): Promise<Partial<OfferingItem>[]> => {
  try {
    // The public URL provided by the user
    const publicUrl = "https://edfirstadmin-my.sharepoint.com/:x:/g/personal/admin_edfirst_in/IQCu2RUdpZBPQpgPaUCSoQNWAUpOWYPNfVEARX-dshwey9I?e=rradaR";
    
    // Convert to direct download link using the download.aspx endpoint
    // Extract the share token from the public URL
    // The share token is the part after /personal/admin_edfirst_in/ and before ?e=...
    // In this case: IQCu2RUdpZBPQpgPaUCSoQNWAUpOWYPNfVEARX-dshwey9I
    const shareToken = "IQCu2RUdpZBPQpgPaUCSoQNWAUpOWYPNfVEARX-dshwey9I";
    const downloadUrl = `https://edfirstadmin-my.sharepoint.com/personal/admin_edfirst_in/_layouts/15/download.aspx?share=${shareToken}`;

    const response = await fetch(downloadUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch Excel file: ${response.statusText}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: "array" });
    
    // Assume the first sheet contains the data
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    
    // Convert to JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet) as any[];

    // Map to OfferingItem structure
    return jsonData.map((row) => {
      const iconName = row["Icon"] || row["icon"];
      const icon = ICON_MAP[iconName] || DEFAULT_ICON;
      
      const featuresRaw = row["Features"] || row["features"];
      // Split by semicolon (;) to allow multiple items
      const features = typeof featuresRaw === "string" 
        ? featuresRaw.split(";").map((f: string) => f.trim()).filter((f: string) => f.length > 0)
        : [];

      return {
        title: row["Title"] || row["title"],
        description: row["Description"] || row["description"],
        color: row["Color"] || row["color"],
        icon: icon,
        features: features,
      };
    });

  } catch (error) {
    console.error("Error fetching or parsing offerings data:", error);
    return [];
  }
};
