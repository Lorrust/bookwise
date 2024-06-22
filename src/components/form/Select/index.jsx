import { useState, useEffect } from "react";

import Creatable from 'react-select/creatable';
import makeAnimated from "react-select/animated";

import { useCategoriesValue } from "../../../contexts/CategoriesContext";

const animatedComponents = makeAnimated();

export const MultiSelect = ({setData}) => {
    const [options, setOptions] = useState([]);

    const { categories, setCategories } = useCategoriesValue();

    useEffect(() => {
        setOptions(
          categories
            .filter((category) => !category.ignore)
            .map((category) => ({
              value: category.id,
              label: category.name,
            }))
        );
    }, [categories]);

    const createOption = (label) => {
        setCategories((current) => [...current, {
          id: current.length,
          name: label,
          items: []
        }])
    }

    const customStyles = {
        control: (provided) => ({
            ...provided,
            borderRadius: '0.5rem',
            padding: '0.5rem',
            background: 'rgb(173, 216, 230, 0.2)',
            border: '1px solid #ADD8E6',
            fontSize: '0.9rem'
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#5E8396',
            fontSize: '0.9rem'
        })
    }

    return (
        <Creatable
          isClearable 
          isMulti
          closeMenuOnSelect={false}
          options={options}
          components={animatedComponents}
          styles={customStyles}
          placeholder="Categorias"
          formatCreateLabel={(inputValue) => `Criar a categoria "${inputValue}"?`}
          noOptionsMessage={() => "Sem opções"}
          onChange={(value) => setData((currentForm) => ({
            ...currentForm,
            categories: value
          }))} 
        />
    )
}