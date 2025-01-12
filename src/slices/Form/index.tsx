"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { connectAirtable, createSubscriber } from "@/utils/airtable";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

/**
 * Props for `Form`.
 */
export type FormProps = SliceComponentProps<Content.FormSlice>;

const Form = ({ slice }: FormProps): JSX.Element => {
  const title = slice.primary.title && slice.primary.title[0] && typeof slice.primary.title[0] === 'object' ? slice.primary.title[0].text : "";
  // const base = connectAirtable();
  // console.log(base);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitting form data");
    createSubscriber(formData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setFormData((previousFormData) => ({
      ...previousFormData,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center gap-4 p-4"
    >
      <form className="flex flex-col gap-4 w-2/3" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold">{title}</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border border-gray-300 p-2 rounded-md"
          required
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border border-gray-300 p-2 rounded-md"
          required
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="text"
          name="message"
          placeholder="Message"
          className="border border-gray-300 p-2 rounded-md"
          required
          onChange={handleChange}
          value={formData.message}
        />
        <Button className="w-full" variant="secondary" type="submit">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default Form;