import { Shield } from "lucide-react"

export default function UserPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
          <Shield className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">User Policy</h1>
        <p className="text-lg text-gray-600">
          Our commitment to privacy, security, and responsible use of our services.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold gradient-text mb-6">Privacy Policy</h2>

        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold mb-2">Information We Collect</h3>
            <p>
              At Content Generator, we collect information to provide and improve our services. The types of information we collect
              include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Account information (name, email, password) when you register</li>
              <li>Usage data (features used, time spent, interactions with our services)</li>
              <li>Content you create or provide (prompts, questions, feedback)</li>
              <li>Device and browser information for optimization and security</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Provide, maintain, and improve our services</li>
              <li>Personalize your experience and deliver tailored content</li>
              <li>Develop new features and services</li>
              <li>Communicate with you about updates, offers, and support</li>
              <li>Detect and prevent fraud, abuse, and security issues</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Data Sharing and Disclosure</h3>
            <p>We do not sell your personal information. We may share information in the following circumstances:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>With your consent or at your direction</li>
              <li>With service providers who process data on our behalf</li>
              <li>For legal reasons, including to comply with applicable laws and regulations</li>
              <li>In connection with a merger, sale, or acquisition of all or part of our company</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to protect your information. However, no
              method of transmission or storage is 100% secure, and we cannot guarantee absolute security. We regularly
              review and update our security practices to enhance protection.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Your Rights and Choices</h3>
            <p>Depending on your location, you may have rights regarding your personal information, including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Accessing, correcting, or deleting your information</li>
              <li>Restricting or objecting to certain processing activities</li>
              <li>Requesting portability of your information</li>
              <li>Withdrawing consent for optional processing</li>
            </ul>
            <p className="mt-2">To exercise these rights, please contact us at privacy@bookie.ai.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold gradient-text mb-6">Terms of Service</h2>

        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold mb-2">Acceptance of Terms</h3>
            <p>
              By accessing or using Content Generator's services, you agree to be bound by these Terms of Service. If you do not
              agree to these terms, please do not use our services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">User Accounts</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities
              that occur under your account. You must immediately notify us of any unauthorized use of your account.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Acceptable Use</h3>
            <p>When using our services, you agree not to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Use our services to generate harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to our systems or user accounts</li>
              <li>Interfere with or disrupt the integrity or performance of our services</li>
              <li>Engage in any activity that could harm or impair others' use of our services</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Intellectual Property</h3>
            <p>
              Content Generator and its licensors retain all rights, title, and interest in and to our services, including all
              intellectual property rights. We grant you a limited, non-exclusive, non-transferable license to use our
              services for personal, non-commercial purposes.
            </p>
            <p className="mt-2">Content generated through our services is subject to the following terms:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>You retain ownership of content you create using our services</li>
              <li>We may use anonymized content to improve our AI models and services</li>
              <li>
                You are responsible for ensuring your use of generated content does not infringe on others' rights
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, Content Generator shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or relating to your use of our services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Changes to Terms</h3>
            <p>
              We may modify these Terms of Service at any time. We will notify users of material changes through our
              website or by email. Your continued use of our services after such modifications constitutes acceptance of
              the updated terms.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold gradient-text mb-6">Content Policy</h2>

        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold mb-2">Educational Purpose</h3>
            <p>
              Content Generator's services are designed for educational purposes. Our AI systems are trained to provide
              informative, accurate, and helpful content that supports learning and academic development.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Content Guidelines</h3>
            <p>When using our services, please adhere to these guidelines:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Use our services for legitimate educational purposes</li>
              <li>Do not request content that promotes harmful activities or misinformation</li>
              <li>Respect intellectual property rights and provide proper attribution when appropriate</li>
              <li>Do not attempt to generate content that violates our acceptable use policy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Content Accuracy</h3>
            <p>
              While we strive for accuracy in all content generated by our AI systems, we cannot guarantee that all
              information will be error-free. Users should verify important information from multiple sources,
              especially for critical academic work or research.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Content Moderation</h3>
            <p>We employ various methods to ensure our services generate appropriate content, including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>AI-based content filtering</li>
              <li>User reporting mechanisms</li>
              <li>Regular audits of our systems</li>
              <li>Human review of flagged content</li>
            </ul>
            <p className="mt-2">
              If you encounter inappropriate content, please report it immediately to moderation@bookie.ai.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600">Last updated: May 4, 2025</p>
      </div>
    </div>
  )
}
