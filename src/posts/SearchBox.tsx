import { Input } from "@chakra-ui/react";
import { useRef} from "react";
import { SmallCloseIcon, RepeatIcon } from "@chakra-ui/icons";

interface SearchBoxProps {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  isDebouncing: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  keyword: string;
}

export function SearchBox({ isDebouncing, setKeyword, keyword, inputProps }: SearchBoxProps) {

  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className="w-full sticky top-0 ">
      <div className="w-full relative">
        {/* @ts-expect-error */}
        <Input
          ref={inputRef}
          placeholder="Search"
          border={"1px"}
          borderColor={"brand"}
          className="w-full "
          value={keyword}
          onChange={(e) => {
            setKeyword(() => {
              return e.target.value;
            });
          }}
          {...inputProps}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <SmallCloseIcon
            className=""
            onClick={() => {
              setKeyword("");
              if (inputRef?.current?.value) {
                console.log(inputRef?.current.value);
              }
            }}
          />
        </div>
        {isDebouncing && (
          <div className="absolute inset-y-0 right-[10%] flex items-center pr-3">
            <RepeatIcon className="animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
}
