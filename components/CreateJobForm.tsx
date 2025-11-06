"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  JobStatus,
  JobMode,
  CreateAndEditJobType,
  createAndEditJobSchema,
} from "@/utils/types";
import { Button } from "./ui/button";
import { Form } from "./ui/form";
import { CustomFormField, CustomFormSelect } from "./FormComponents";

function CreateJobForm() {
  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: "",
      company: "",
      location: "",
      status: JobStatus.Pending,
      mode: JobMode.FullTime,
    },
  });

  function onSubmit(value: CreateAndEditJobType) {
    console.log(value);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted p-8 rounded"
      >
        <h2 className="capitalize font-semibold text-4xl mb-6">add job</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
          {/* position */}
          <CustomFormField name="position" control={form.control} />{" "}
          {/* company */}
          <CustomFormField name="company" control={form.control} />{" "}
          {/* location */}
          <CustomFormField name="location" control={form.control} />
          {/* Job status  */}
          <CustomFormSelect
            name="status"
            control={form.control}
            labelText="job status"
            items={Object.values(JobStatus)}
          />
          {/* Job mode  */}
          <CustomFormSelect
            name="mode"
            control={form.control}
            labelText="job mode"
            items={Object.values(JobMode)}
          />
          <Button type="submit" className="self-end capitalize">
            create job
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default CreateJobForm;
