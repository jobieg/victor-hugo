import CMS from "netlify-cms";
import FoodPreview from "./cms/pinball-preview";
import DrinkPreview from "./cms/croatia-preview";
import GalleryPreview from "./cms/gallery-preview";

CMS.registerPreviewStyle("../css/main.css");
CMS.registerPreviewTemplate("pinball", PinballPreview);
CMS.registerPreviewTemplate("croatia", CroatiaPreview);
CMS.registerPreviewTemplate("gallery", GalleryPreview);
