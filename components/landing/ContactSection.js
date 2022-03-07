import Script from "next/script";

export default function ContactSection({ formID }) {
  return (
    <section className="pt-10">
      <div className="py-28">
        {/* fireform goes here */}
        <div id="fireformsId" name={formID}></div>
        <Script
          id="fireforms-script"
          src="https://app.fireforms.io/embed/Fireforms"
        />
        {/* end form */}
      </div>
    </section>
  );
}
