import { Button } from "./ui/button";
import { Input } from "./ui/input";

const AddResultsForm = () => {
  return (
    <>
      <form
        className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-100 dark:bg-white/10"
        onSubmit={() => {
          console.log("added");
        }}
      >
        <Input
          className="w-1/2 h-10 bg-white dark:bg-white/10"
          placeholder="Product"
          name="product"
        />
        <Input
          className="w-1/2 h-10 bg-white dark:bg-white/10"
          placeholder="Company"
          name="company"
        />
        <Input
          className="w-1/2 h-10 bg-white dark:bg-white/10 "
          placeholder="Country"
          name="country"
        />
        <p className="block">Alternative</p>
        <Input
          className="w-1/2 h-10 bg-white dark:bg-white/10"
          placeholder="Product"
          name="product"
        />
        <Input
          className="w-1/2 h-10 bg-white dark:bg-white/10"
          placeholder="Company"
          name="company"
        />
        <Input
          className="w-1/2 h-10 bg-white dark:bg-white/10 "
          placeholder="Country"
          name="country"
        />
        <Button type="submit" variant="outline" className="h-10">
          Submit
        </Button>
      </form>
    </>
  );
};

export default AddResultsForm;
