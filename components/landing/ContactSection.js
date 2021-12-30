import Script from "next/script";

export default function ContactSection() {
  return (
    <section className="pt-10">
      <div className="py-28">
        {/* fireform goes here */}
        <div id="fireformsId" name="619a849148859cdd82152a84"></div>
        <Script
          id="fireforms-script"
          src="https://app.fireforms.io/embed/Fireforms"
        />
        {/* end form */}
      </div>
    </section>
  );
}
