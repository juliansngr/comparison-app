import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  handleSearch: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function SearchBar({ handleSearch }: SearchBarProps) {
  return (
    <>
      <form
        className="flex justify-center content-center gap-2 p-4 rounded-xl bg-gray-100 dark:bg-white/10"
        onSubmit={handleSearch}
      >
        <Input
          className="w-1/2 h-10 bg-white dark:bg-white/10"
          placeholder="Search for products"
          name="input"
        />
        <Button type="submit" variant="outline" className="h-10">
          <Search />
        </Button>
      </form>
    </>
  );
}
