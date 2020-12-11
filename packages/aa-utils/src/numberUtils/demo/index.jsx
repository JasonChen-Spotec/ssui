import React from 'react'
import { Descriptions, Typography } from 'antd'
import numberUtils from 'aa-utils/lib/numberUtils';

const { Title } = Typography;

const Demo = () => {
  return (
    <div>
      <Title level={5}>格式化数字(style: 'decimal')</Title>
      <Descriptions column={1}>
        <Descriptions.Item label="2332.2(默认最小0位小数，最大2位小数，默认有分隔符)">{numberUtils.formatNumber(2332.2)}</Descriptions.Item>
        <Descriptions.Item label="-2332.225(无分隔符)">{numberUtils.formatNumber(-2332.225, { useGrouping: false })}</Descriptions.Item>

        <Descriptions.Item label="2332.2(最小保留2位小数)">
          {
            numberUtils.formatNumber(2332.2, {
              minimumFractionDigits: 2,
              useGrouping: false
            })
          }
        </Descriptions.Item>
        <Descriptions.Item label="2332.223(最大保留2位小数)">
          {
            numberUtils.formatNumber(2332.228, {
              maximumFractionDigits: 2
            })
          }
        </Descriptions.Item>
      </Descriptions>

      <Title level={5}>格式化钱(style: 'currency', currency: 'USD')</Title>
      <Descriptions column={1}>
        <Descriptions.Item label="2332.2(默认最小0位小数，最大2位小数)">{numberUtils.formatCurrency(2332.2)}</Descriptions.Item>
        <Descriptions.Item label="2332.2(最小保留2位小数)">
          {
            numberUtils.formatCurrency(2332.2, {
              minimumFractionDigits: 2
            })
          }
        </Descriptions.Item>
        <Descriptions.Item label="2332.223(最大保留2位小数)">
          {
            numberUtils.formatCurrency(-2332.228, {
              maximumFractionDigits: 2
            })
          }
        </Descriptions.Item>
        <Descriptions.Item label="2332.2(usePlus)">{numberUtils.formatCurrency(2332.2, { usePlus: true })}</Descriptions.Item>
      </Descriptions>

      <Title level={5}>格式化百分比(style: 'percent')</Title>
      <Descriptions column={1}>
        <Descriptions.Item label="0.232(默认最小0位小数，最大2位小数)">{numberUtils.formatPercent(0.232)}</Descriptions.Item>
        <Descriptions.Item label="0.222(最小保留2位小数)">
          {
            numberUtils.formatPercent(-0.222, {
              minimumFractionDigits: 2
            })
          }
        </Descriptions.Item>
        <Descriptions.Item label="0.22238(最大保留2位小数)">
          {
            numberUtils.formatPercent(0.22238, {
              maximumFractionDigits: 2
            })
          }
        </Descriptions.Item>
        <Descriptions.Item label="0.232(usePlus)">{numberUtils.formatPercent(0.232, { usePlus: true })}</Descriptions.Item>
      </Descriptions>
    </div>
  )
}

export default Demo
