import Link from "next/link"
import { HelpCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
          <HelpCircle className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600">
          Find answers to common questions about Content Generator and our AI-powered learning solutions.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold gradient-text mb-6">General Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="what-is-bookie">
            <AccordionTrigger className="text-lg font-medium">What is Content Generator?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Content Generator is an AI-powered educational platform designed to help students learn more effectively. We offer
              three main services: AI Book Generator, AI Counselor, and AI Doubt Solver. Our mission is to make
              education more accessible, personalized, and effective through cutting-edge artificial intelligence
              technology.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="how-does-bookie-work">
            <AccordionTrigger className="text-lg font-medium">How does Content Generator work?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Content Generator uses advanced artificial intelligence to provide personalized educational services. Our AI Book
              Generator creates custom learning materials based on your requirements. The AI Counselor provides guidance
              tailored to your academic goals and challenges. The Doubt Solver answers your specific questions and helps
              clarify difficult concepts.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="who-can-use-bookie">
            <AccordionTrigger className="text-lg font-medium">Who can use Content Generator?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Content Generator is designed for students of all ages and educational levels, from elementary school to university.
              Teachers can also use our platform to create customized learning materials for their students. Our
              services are particularly helpful for self-directed learners, students needing additional support, and
              those looking to explore topics beyond their standard curriculum.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="is-bookie-free">
            <AccordionTrigger className="text-lg font-medium">Is Content Generator free to use?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Content Generator offers both free and premium services. Basic versions of our tools are available at no cost, while
              advanced features and increased usage limits are available through our subscription plans. Please visit
              our pricing page for detailed information about our plans and what they include.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold gradient-text mb-6">Book Generator</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="what-is-book-generator">
            <AccordionTrigger className="text-lg font-medium">What is the AI Book Generator?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              The AI Book Generator creates personalized educational books based on your specific requirements. You can
              specify the subject, difficulty level, learning style, and other parameters, and our AI will generate
              content tailored to these specifications. This allows for truly personalized learning materials that match
              your unique needs and interests.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="book-generator-subjects">
            <AccordionTrigger className="text-lg font-medium">
              What subjects does the Book Generator cover?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Our AI Book Generator covers a wide range of subjects including mathematics, science, literature, history,
              languages, and more. The AI is constantly learning and expanding its knowledge base, so the range of
              topics it can address continues to grow. If you have specific subject requirements, you can specify them
              when generating your book.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="book-generator-accuracy">
            <AccordionTrigger className="text-lg font-medium">
              How accurate is the content generated by the Book Generator?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              We strive for high accuracy in all content generated by our AI. The system is trained on reliable
              educational resources and is regularly updated with the latest information. However, as with any AI
              system, there may occasionally be inaccuracies. We recommend using the generated content as a learning aid
              rather than as the sole source of information for critical studies.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold gradient-text mb-6">AI Counselor</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="what-is-ai-counselor">
            <AccordionTrigger className="text-lg font-medium">What is the AI Counselor?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              The AI Counselor provides personalized academic guidance and motivation. It can help you plan your
              studies, develop effective learning strategies, overcome academic challenges, and stay motivated. The
              counselor adapts its advice based on your specific situation, goals, and learning style.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="counselor-replace-human">
            <AccordionTrigger className="text-lg font-medium">
              Can the AI Counselor replace human counselors?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              The AI Counselor is designed to complement, not replace, human counselors. It provides immediate,
              accessible guidance for common academic challenges and questions. However, for complex personal issues,
              mental health concerns, or situations requiring human judgment, we always recommend consulting with a
              qualified human counselor or professional.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="counselor-data-privacy">
            <AccordionTrigger className="text-lg font-medium">
              How does the AI Counselor handle my personal data?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              We take data privacy very seriously. Information shared with the AI Counselor is used solely to provide
              personalized guidance and improve our services. We do not sell or share your personal data with third
              parties. All data is stored securely and in compliance with relevant privacy regulations. For more
              details, please refer to our User Policy.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold gradient-text mb-6">Doubt Solver</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="what-is-doubt-solver">
            <AccordionTrigger className="text-lg font-medium">What is the Doubt Solver?</AccordionTrigger>
            <AccordionContent className="text-gray-600">
              The Doubt Solver is an AI-powered tool that answers your specific academic questions and helps clarify
              difficult concepts. Whether you're struggling with a math problem, a scientific concept, or a literary
              analysis, the Doubt Solver can provide clear, concise explanations tailored to your level of
              understanding.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="doubt-solver-response-time">
            <AccordionTrigger className="text-lg font-medium">
              How quickly does the Doubt Solver respond?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              The Doubt Solver provides instant responses to your questions. Unlike human tutors who may not be
              available at all hours, our AI system is accessible 24/7 and can address your doubts whenever they arise.
              This immediate feedback helps maintain your learning momentum and prevents frustration.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="doubt-solver-complex-questions">
            <AccordionTrigger className="text-lg font-medium">
              Can the Doubt Solver handle complex questions?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Yes, the Doubt Solver is designed to handle questions across various complexity levels. It can address
              both basic and advanced topics in many subject areas. For particularly complex or specialized questions,
              the system will provide the best explanation possible based on its knowledge base, and may suggest
              additional resources for further exploration.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold gradient-text mb-6">Technical & Support</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="technical-requirements">
            <AccordionTrigger className="text-lg font-medium">
              What are the technical requirements for using Content Generator?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Content Generator is a web-based platform that works on most modern devices with an internet connection. We recommend
              using the latest version of Chrome, Firefox, Safari, or Edge browsers for the best experience. Our
              services are also accessible via mobile devices, though some advanced features may work better on desktop
              or laptop computers.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="account-required">
            <AccordionTrigger className="text-lg font-medium">
              Do I need to create an account to use Content Generator?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Basic features of Content Generator can be accessed without an account. However, creating a free account allows you
              to save your generated books, track your learning progress, and access personalized recommendations.
              Premium features require a registered account with an active subscription.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="contact-support">
            <AccordionTrigger className="text-lg font-medium">
              How can I contact support if I have issues?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              If you encounter any issues or have questions not covered in our FAQ, you can contact our support team via
              email at support@bookie.ai. We also offer live chat support during business hours. Premium users have
              access to priority support with faster response times.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Still have questions? Feel free to{" "}
          <Link href="/#contact" className="text-purple-600 hover:text-purple-800 transition-colors">
            contact us
          </Link>{" "}
          and we'll be happy to help.
        </p>
      </div>
    </div>
  )
}
