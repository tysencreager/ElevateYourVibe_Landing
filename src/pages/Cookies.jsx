import LegalLayout from './LegalLayout.jsx';
import { CONTACT_EMAIL } from '../data/links.js';

export default function Cookies() {
  return (
    <LegalLayout title="Cookies Policy" effective="May 1, 2026">
      <p>
        This Cookies Policy explains how Energize Your Vibe, LLC (&ldquo;we,&rdquo;
        &ldquo;us,&rdquo; &ldquo;our&rdquo;) uses cookies and similar technologies on
        energizeyourvibe.com. It should be read together with our{' '}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>1. What Cookies Are</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website.
        They let the site remember your preferences, keep you signed in, and measure how
        the site is used. &ldquo;Similar technologies&rdquo; include things like local
        storage and pixel tags.
      </p>

      <h2>2. Cookies We Use</h2>

      <h3>Strictly necessary</h3>
      <p>
        These cookies are required for the Site to work properly, for example to load
        pages, remember form entries during checkout, and keep the experience secure.
        You cannot opt out of these and still have the Site function.
      </p>

      <h3>Functional</h3>
      <p>
        These cookies remember choices you make, such as which pop-ups you&rsquo;ve
        dismissed (we use browser session storage for the launch pop-up, for example),
        so your experience feels consistent from one page to the next.
      </p>

      <h3>Analytics</h3>
      <p>
        We may use analytics cookies (for example from our hosting provider or a
        first-party analytics tool) to understand how visitors use the Site so we can
        improve it. These cookies help us count visits, measure which pages are read
        most, and spot errors. They do not collect information that directly identifies
        you.
      </p>

      <h3>Third-party cookies</h3>
      <p>
        Some pages link to or embed content from third parties (for example our payment
        processor&rsquo;s checkout, embedded videos, or social media). Those third
        parties may set their own cookies when you interact with their content. We do
        not control these cookies and recommend reviewing their policies.
      </p>

      <h2>3. How to Manage Cookies</h2>
      <p>
        You can control cookies through your browser settings. Most browsers let you
        block or delete cookies, or alert you when cookies are being set. Please note
        that blocking strictly necessary cookies may prevent parts of the Site from
        working. Links to help pages for common browsers:
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471" target="_blank" rel="noopener noreferrer">Safari</a></li>
        <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Firefox</a></li>
        <li><a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>

      <h2>4. Do Not Track</h2>
      <p>
        Some browsers offer a &ldquo;Do Not Track&rdquo; signal. Because there is no
        industry-wide standard for how to respond, we do not currently respond to these
        signals, but we honor the opt-out choices described in our{' '}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>5. Changes to This Policy</h2>
      <p>
        We may update this Cookies Policy from time to time. When we do, we will update
        the &ldquo;Effective&rdquo; date above.
      </p>

      <h2>6. Contact</h2>
      <p>
        Questions about our use of cookies can be sent to{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <p className="text-sm text-gray-500 mt-10">
        <strong>Note:</strong> This page is provided for general informational purposes
        and does not constitute legal advice. Please have this Policy reviewed by a
        qualified attorney before relying on it.
      </p>
    </LegalLayout>
  );
}
