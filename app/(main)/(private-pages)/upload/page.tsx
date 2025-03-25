import BgGradient from "@/components/bg-gradient";
import UploadHeader from "@/components/upload/upload-header";
import UploadFrom from "@/components/upload/upload-form";
const Page = () => {
  return (
    <section className="min-h-screen">
      <BgGradient />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <UploadHeader />
          <UploadFrom />
        </div>
      </div>
    </section>
  );
};

export default Page;
