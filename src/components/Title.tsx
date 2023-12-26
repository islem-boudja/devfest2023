import { cn } from "@/lib/utils";
import { EB_Garamond } from "next/font/google";
const eb_Garamond = EB_Garamond({
  subsets: ["latin"],
});
const Title = (title: { title: string }) => {
  return (
    <h1
      className={cn(
        " font-medium text-4xl text-primary-color",
        eb_Garamond.className
      )}
    >
      {title.title}
    </h1>
  );
};

export default Title;
