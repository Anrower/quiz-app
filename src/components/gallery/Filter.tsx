import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import './filter.scss';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option: FilterType) => option.title,
});


export default function Filter() {

  return (
    <Autocomplete
      className='filter'
      id="filter-demo"
      options={filterParams}
      getOptionLabel={(option) => option.title}
      filterOptions={filterOptions}
      sx={{
        width: 300,
        // backgroundColor: '#FFBCA2',
        fontSize: '14px',
      }}
      renderInput={(params) => <TextField sx={{
        backgroundColor: '#FFBCA2',
        border: 'none',
        borderRadius: '28px'
      }} {...params} label="Фильтр по стилю" />}
    />
  );
}

interface FilterType {
  title: string;
}

const filterParams = [
  { title: 'Все' },
  { title: "Реализм" },
  { title: "Импрессионизм" },
  { title: "Символизм" },
  { title: "Романтизм" },
  { title: "Барокко" },
  { title: "Рококо" },
  { title: "Возрождение" },
];