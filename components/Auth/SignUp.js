"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import cn from "classnames";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const SignUp = () => {
  const supabase = createClientComponentClient();
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  async function signUp(formData) {
    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      // redirectTo: `${window.location.origin}/auth/callback`,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      setSuccessMsg(
        "Success! Please check your email for further instructions."
      );
    }
  }

  async function signUpWithGoogle() {
    let { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    console.log(data);

    if (error) {
      setErrorMsg(error.message);
    }
  }

  return (
    <div className="card h-full w-full grid place-content-center bg-white">
      <div className="p-8 rounded-lg bg-slate-50 w-[450px]">
        <h2 className="w-full text-center text-stone-800 text-xl font-bold mb-8">
          Create Your Account
        </h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={signUp}
        >
          {({ errors, touched }) => (
            <Form className="column w-full">
              <div className="flex mb-5 items-center justify-between">
                <label htmlFor="email" className="text-stone-700">
                  Email
                </label>
                <Field
                  className={cn(
                    "input rounded-lg border-stone-200 text-stone-800",
                    errors.email && "bg-red-500"
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
                    "input rounded-lg border-stone-200 text-stone-800",
                    errors.password && touched.password && "bg-red-500"
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
                Sign Up
              </button>
            </Form>
          )}
        </Formik>

        <div className="my-5 text-stone-900 text-center">or,</div>

        <button
          className="button-inverse w-full bg-slate-800 p-3 rounded-lg hover:bg-stone-900"
          type="button"
          onClick={signUpWithGoogle}
        >
          Sign Up with Google
        </button>

        {errorMsg && <div className="text-red-600">{errorMsg}</div>}
        {successMsg && <div className="text-black">{successMsg}</div>}
        <Link
          href="/login"
          className="link w-full text-md text-blue-600 text-center block mt-5 hover:text-blue-700"
        >
          Already have an account? Sign In.
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
