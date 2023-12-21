  
import { useEffect, useState } from 'react';

interface CommonHookProps {
  selectedValue: string;
  onChange: (value: string) => void;
  fetch?: () => Promise<{ value: string; label: string }[]> | { value: string; label: string }[];
}

const useCommonHook = ({ selectedValue, onChange, fetch }: CommonHookProps) => {
  const [options, setOptions] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data: { value: string; label: string }[] = [
          { value: "1", label: "1" },
          { value: "2", label: "2" },
          { value: "3", label: "3" },
        ];

        if (fetch) {
          // Check if fetch is a function (async) or an array (sync)
          data = typeof fetch === 'function' ? await fetch() : fetch;
        }

        setOptions(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [fetch]);

  const handleSelectChange = (value: string) => {
    onChange(value);
  };

  return {
    selectedValue,
    options,
    onChange: handleSelectChange,
  };
};

export default useCommonHook;
