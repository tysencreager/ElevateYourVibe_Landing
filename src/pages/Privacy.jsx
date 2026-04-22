import LegalLayout from './LegalLayout.jsx';
import { CONTACT_EMAIL } from '../data/links.js';

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" effective="May 1, 2026">
      <p>
        Energize Your Vibe, LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
        respects your privacy. This Privacy Policy explains what personal information we
        collect when you use energizeyourvibe.com and our membership Services, how we
        use it, and the choices you have.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>Information you give us</h3>
      <ul>
        <li><strong>Contact information</strong> such as your name, email address, and phone number when you subscribe to our newsletter, inquire about the community, or join the membership.</li>
        <li><strong>Membership details</strong> such as a shipping address (for welcome gifts and retreats), birthday, or other details you voluntarily share in calls, forms, or community posts.</li>
        <li><strong>Payment information</strong> which is collected directly by our payment processor (currently Square). We do not store full card numbers on our servers.</li>
      </ul>

      <h3>Information we collect automatically</h3>
      <ul>
        <li><strong>Usage data</strong> such as pages viewed, referring URL, device type, browser, approximate location derived from IP address, and timestamps.</li>
        <li><strong>Cookies and similar technologies</strong> used to keep the Site running, remember preferences, and measure engagement. See our <a href="/cookies">Cookies Policy</a> for details.</li>
      </ul>

      <h3>Information from third parties</h3>
      <p>
        We may receive limited information from our payment processor, email provider,
        analytics, or community platform (for example that a purchase succeeded or that
        a subscriber opened an email).
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Operate and deliver the Services, including processing payments, granting community access, shipping welcome gifts, and running events,</li>
        <li>Send service messages (receipts, scheduling, changes to the Services),</li>
        <li>Send optional inspiration, event reminders, and community news when you&rsquo;ve opted in,</li>
        <li>Improve the Site, our programs, and our offerings,</li>
        <li>Prevent fraud, protect our rights, and comply with legal obligations.</li>
      </ul>

      <h2>3. How We Share Information</h2>
      <p>
        We do not sell your personal information. We share it only in the limited
        circumstances below:
      </p>
      <ul>
        <li><strong>Service providers</strong> that help us run the business (for example our payment processor, email service provider, hosting provider, analytics, and community platform) and are contractually required to protect your information.</li>
        <li><strong>Legal and safety reasons</strong> when we believe disclosure is reasonably necessary to comply with law, enforce our Terms, or protect the rights, safety, or property of Energize Your Vibe, our members, or the public.</li>
        <li><strong>Business transfers</strong> in connection with a merger, acquisition, reorganization, or sale of assets, subject to reasonable confidentiality protections.</li>
      </ul>

      <h2>4. Your Choices</h2>
      <ul>
        <li><strong>Marketing emails:</strong> Every marketing email includes an unsubscribe link. You can also email us to opt out.</li>
        <li><strong>Text messages:</strong> If you opt in to receive texts, you can reply STOP at any time to unsubscribe.</li>
        <li><strong>Cookies:</strong> You can manage cookies through your browser settings. See the <a href="/cookies">Cookies Policy</a> for more.</li>
        <li><strong>Access, correction, deletion:</strong> You may request a copy of the personal information we hold about you, correct it, or ask us to delete it by emailing <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will respond within a reasonable time and as required by applicable law.</li>
      </ul>

      <h3>For residents of California, Colorado, Virginia, and similar jurisdictions</h3>
      <p>
        You may have additional rights under state privacy laws, including the right to
        know what personal information we collect, the right to delete it, the right to
        correct inaccuracies, the right to opt out of certain sharing, and the right not
        to be discriminated against for exercising your rights. To exercise these
        rights, contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We keep personal information for as long as we need it to provide the Services,
        meet legal or accounting obligations, resolve disputes, and enforce our
        agreements. When we no longer need it, we take reasonable steps to delete or
        anonymize it.
      </p>

      <h2>6. Security</h2>
      <p>
        We use reasonable administrative, technical, and physical safeguards designed to
        protect personal information. No method of transmission or storage is 100%
        secure, however, and we cannot guarantee absolute security.
      </p>

      <h2>7. Children</h2>
      <p>
        The Services are intended for adults. We do not knowingly collect personal
        information from anyone under 18. If you believe a child has provided us with
        personal information, please contact us so we can delete it.
      </p>

      <h2>8. International Visitors</h2>
      <p>
        We are based in the United States, and your information is stored and processed
        in the U.S. If you are visiting from outside the U.S., you understand and
        consent to the transfer of your information to the U.S., which may have
        different data protection laws than your country.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Policy from time to time. When we do, we will update the
        &ldquo;Effective&rdquo; date above and, for material changes, provide reasonable
        notice.
      </p>

      <h2>10. Contact</h2>
      <p>
        To ask questions or exercise any rights under this Policy, contact us at{' '}
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
