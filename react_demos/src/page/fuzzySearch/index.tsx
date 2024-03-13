/**
 * 模糊搜索demo
 */

import React, { useEffect, useState, useCallback } from 'react';
import { Select } from 'antd';
import { debounce } from 'loadsh';

import { getfuzzySearchData } from './service/index'

const FuzzySearch = () => {

    const [options, setOptions] = useState<any[]>([]);

    const handleToCodeName = (data: any[]) => {
        const result = [];
        data.forEach((item,index) => {
            result.push({
                label: item.name,
                value: item.code
            })
        }) 
        return result;
    }

    const fuzzySearchDataApi = async (params?: any) => {
        const res = await getfuzzySearchData(params);
        const { data } = res;
        setOptions(handleToCodeName(data));
    }

    const filterOption = (input: string, option: { label: string; value: string }) => {
        return (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    }

    const getActualTime = useCallback(debounce(async (value: string) => {
        const params = {
            name: value
        }
        fuzzySearchDataApi(params);
    }, 1000), []);

    useEffect(() => {
        fuzzySearchDataApi();
    }, [])

    return (
        <Select
            showSearch
            style={{ width: 120 }}
            options={options}
            // fieldNames={{ label: 'name', value: 'code' }}
            filterOption={filterOption}
            onSearch={(value: string) => {
                getActualTime(value);
            }}
        />
    )
}

export default FuzzySearch;