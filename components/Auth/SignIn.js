"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import cn from "classnames";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const SignIn = () => {
  const supabase = createClientComponentClient();
  const [errorMsg, setErrorMsg] = useState(null);

  async function signIn(formData) {
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      setErrorMsg(error.message);
    }
  }

  return (
    <div className="card h-full w-full grid place-content-center bg-white">
      <div className="p-8 rounded-lg bg-slate-50 w-[450px]">
        <h2 className="w-full text-center text-stone-800 text-xl font-bold mb-8">
          Please Login to your account
        </h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignInSchema}
          onSubmit={signIn}
        >
          {({ errors, touched }) => (
            <Form className="column w-full">
              <div className="flex mb-5 items-center justify-between">
                <label htmlFor="email" className="text-stone-700">
                  Email
                </label>
                <Field
                  className={cn(
                    "input rounded-lg border-stone-200 text-stone-900",
                    errors.email && touched.email && "bg-red-50"
                  )}
                  id="email"
                  name="email"
                  placeholder="jane@acme.com"
                  type="email"
                />
                {errors.email && touched.email ? (
                  <div className="text-red-600">{errors.email}</div>
                ) : null}
              </div>
              <div className="flex mb-5 items-center justify-between">
                <label htmlFor="password" className="text-stone-700">
                  Password
                </label>
                <Field
                  className={cn(
                    "input rounded-lg border-stone-200 text-stone-900",
                    errors.password && touched.password && "bg-red-50"
                  )}
                  id="password"
                  name="password"
                  type="password"
                />
                {errors.password && touched.password ? (
                  <div className="text-red-600">{errors.password}</div>
                ) : null}
              </div>

              <button
                className="button-inverse w-full bg-slate-800 p-3 rounded-lg hover:bg-stone-900"
                type="submit"
              >
                Sign In
              </button>
            </Form>
          )}
        </Formik>
        {errorMsg && <div className="text-red-600">{errorMsg}</div>}
        <Link
          href="/signup"
          className="link w-full text-md text-blue-600 text-center block mt-5 hover:text-blue-700"
        >
          Don&apos;t have an account? Sign Up.
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
