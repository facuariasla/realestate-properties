import React, { useState, useEffect } from "react";
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import router from 'next/router'
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  const colorComp = useColorModeValue('gray.100', 'gray.800');

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);
    values.forEach((item)=> {
      if(item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
        
      }
    })
    router.push({ pathname: path, query })
  };

  return (
    <Flex bg={colorComp} p="4" justifyContent="center" flexWrap="wrap">
      {filters.map((filter) => (
        <Box key={filter.queryName} >
          <Select
          cursor='pointer'
            placeholder={filter.placeholder}
            w="fit-content"
            p="2"
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
