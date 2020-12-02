import { request } from 'umi';
import { TableListParams, TableListItem } from './data.d';
import subjectsJson from '../../../document/output/01.subjectsJson.json'

export async function queryRule(params?: TableListParams) {
  console.log(subjectsJson, 'subjectsJson')
  return {data: subjectsJson, current: 1, pageSize: 20, success: true, total: subjectsJson.length}
  const res = await request('/api/rule', {
    params,
  });
  console.log(res)
  return res
}

export async function removeRule(params: { key: number[] }) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params: TableListItem) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
