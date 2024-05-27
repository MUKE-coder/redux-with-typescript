"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { nextStep, previousStep, updateForm } from "@/store/slices/formSlice";
import { FormState } from "@/types/types";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function MultiStepForm() {
  const dispatch = useAppDispatch();
  const { firstName, lastName, email, phone, step } = useAppSelector(
    (state) => state.form
  );
  const user = {
    firstName,
    lastName,
    email,
    phone,
  };
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>({
    defaultValues: { firstName, lastName, email, phone },
  });

  const onSubmit = (data: FormState) => {
    dispatch(updateForm(data));
    console.log(data);
  };
  return (
    <div className="bg-blue-50 py-8 px-8 min-h-screen">
      <h2 className="text-center">Multi Step Form </h2>
      <div className="max-w-xl border border-gray-300 bg-white rounded-xl mx-auto min-h-96 p-8">
        {/* Steps */}
        <div className="flex items-center justify-between">
          <button
            className={cn(
              "w-10 h-10 bg-white rounded-full border border-gray-300 flex items-center justify-center",
              step === 1 && "border-blue-600 border-2"
            )}
          >
            1
          </button>
          <div className="flex-1 h-[1px] bg-slate-300 w-full"></div>
          <button
            className={cn(
              "w-10 h-10 bg-white rounded-full border border-gray-300 flex items-center justify-center",
              step === 2 && "border-blue-600 border-2"
            )}
          >
            2
          </button>
          <div className="flex-1 h-[1px] bg-slate-300 w-full"></div>
          <button
            className={cn(
              "w-10 h-10 bg-white rounded-full border border-gray-300 flex items-center justify-center",
              step === 3 && "border-blue-600 border-2"
            )}
          >
            3
          </button>
        </div>
        <div className="py-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="mb-2">First Name</label>
                  <input
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg border text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    {...register("firstName", { required: true })}
                    placeholder="First Name"
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-xs">
                      This field is required
                    </span>
                  )}
                </div>
                <div>
                  <label className="mb-2">Last Name</label>

                  <input
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg border text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    {...register("lastName", { required: true })}
                    placeholder="Last Name"
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-xs">
                      This field is required
                    </span>
                  )}
                </div>
                <Button
                  type="button"
                  onClick={() => {
                    handleSubmit(onSubmit)();
                    dispatch(nextStep());
                  }}
                >
                  Next
                </Button>
              </div>
            )}
            {step === 2 && (
              <div>
                <div>
                  <label>Email</label>
                  <input
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg border text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    {...register("email", { required: true })}
                    placeholder="Email"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs">
                      This field is required
                    </span>
                  )}
                </div>
                <div>
                  <label>Phone</label>
                  <input
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg border text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    {...register("phone", { required: true })}
                    placeholder="Phone"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-xs">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <Button
                    variant={"outline"}
                    type="button"
                    onClick={() => dispatch(previousStep())}
                  >
                    Back
                  </Button>
                  <Button type="submit">Submit</Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
