"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const FAQ = () => {
  return (
    <div className="text-white px-10 pb-20">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-10  text-gradient">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="container md:mx-auto  ">
        <Accordion type="multiple">
          <AccordionItem value="item-1" className="cursor-pointer text-xl ">
            <AccordionTrigger>
              What is the pricing model for Helpmate AI, and is there a free
              plan?
            </AccordionTrigger>
            <AccordionContent>
              We offer flexible pricing plans tailored to your needs. Our free
              plan give 5 credit and connect with our basic integrations, so you
              get a glimpse of HelpMateAI magic before making a commitment.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="cursor-pointer focus:outline-none">
              How can I get started?
            </AccordionTrigger>
            <AccordionContent>
              To begin, click the signup button. Once registered, you can start
              utilizing our services.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="cursor-pointer focus:outline-none">
              What payment methods do you accept?
            </AccordionTrigger>
            <AccordionContent>
              We accept various payment methods, including credit cards and
              PayPal. Check our payment options for details.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="cursor-pointer focus:outline-none">
              What payment methods do you accept?
            </AccordionTrigger>
            <AccordionContent>
              We accept various payment methods, including credit cards and
              PayPal. Check our payment options for details.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="cursor-pointer focus:outline-none">
              Can the AI models be customized to fit specific business needs?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely, our AI SaaS platform allows for customization,
              enabling you to tailor the models to suit the unique requirements
              of your business.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="cursor-pointer focus:outline-none">
              Can the video generation feature be automated?
            </AccordionTrigger>
            <AccordionContent>
              Yes, our video generation feature supports automation, allowing
              you to effortlessly create dynamic and engaging videos based on
              your content and requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="cursor-pointer focus:outline-none">
              How can I prompt the system to create a custom image?
            </AccordionTrigger>
            <AccordionContent>
              Just tell us what you need, and we will craft a customized image
              for you! Simply input your request or prompt, and let our system
              do the rest. Easy and hassle-free!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
