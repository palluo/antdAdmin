import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Row, Form, Input } from 'antd'
// import { config } from 'utils'
// import styles from './index.less'

const FormItem = Form.Item

const WinMange = ({
  loading,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  },
}) => {
  function addWeXin () {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      console.log(values)
    })
  }

  return (
    <div>
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator('weiName', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input size="large" onPressEnter={addWeXin} placeholder="公众号名称" />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('weiName', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input size="large" onPressEnter={addWeXin} placeholder="公众号原始ID" />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('weiName', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input size="large" onPressEnter={addWeXin} placeholder="微信号" />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('weiName', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input size="large" onPressEnter={addWeXin} placeholder="头像" />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('weiName', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input size="large" onPressEnter={addWeXin} placeholder="token" />)}
        </FormItem>
        <Row>
          <span>以下为微信高级功能配置，非必需</span>
        </Row>
        <FormItem hasFeedback>
          {getFieldDecorator('weiName', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input size="large" onPressEnter={addWeXin} placeholder="AppId" />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('weiName', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input size="large" onPressEnter={addWeXin} placeholder="AppSecret" />)}
        </FormItem>
        <Row>
          <Button type="primary" size="large" onClick={addWeXin} loading={loading.effects.add}>
                增加
          </Button>
        </Row>
      </form>
    </div>
  )
}

WinMange.propTypes = {
  form: PropTypes.object,
  loading: PropTypes.object,
}

export default connect(({ loading }) => ({ loading }))(Form.create()(WinMange))
