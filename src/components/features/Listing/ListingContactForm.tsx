import React from "react";
import { trpc } from "../../../utils/trpc";

type TListingContactForm = {};

const ListingContactForm = ({}: TListingContactForm) => {
  // Create a TRPC mutation
  const contactFormMutation = trpc.useMutation("contact.contactForm", {
    onSuccess: ({ response }) => alert(response),
    onError: (err) => alert(err.message),
  });

  // Get form data and send a mutation
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    contactFormMutation.mutate({
      name: data.name as string,
      email: data.email as string,
      message: data.message as string,
    });
    e.currentTarget.reset();
  };

  return (
    <div className="mx-4 mt-4 rounded-xl">
      <h3 className="text-xl">Contact landlord</h3>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="rounded-md border border-gray-300 p-2"
            placeholder="Example: John Doe"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="rounded-md border border-gray-300 p-2"
            placeholder="Example: johndoe@email.com"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            className="rounded-md border border-gray-300 p-2"
            placeholder="Example: Im interested in this listing, could you please share more information?"
          ></textarea>
        </div>
        <button
          className="mt-2 rounded-md bg-orange-500 p-2 text-white shadow-lg shadow-orange-100"
          disabled={contactFormMutation.isLoading}
          type="submit"
        >
          Send Message
        </button>

        <div className="mt-1">
          <p className="text-center text-sm text-gray-500">
            By clicking the button, you agree to our
            <br />
            <a href="#" className="text-green-500">
              Terms and Conditions
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ListingContactForm;

const ContactForm = () => {
  return <></>;
};
