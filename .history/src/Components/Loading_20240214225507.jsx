import React, { Fragment } from 'react'

export default function Loading() {
  return (
    <Fragment>
    <div className="row justify-content-center align-items-center vh-100">
    <Th
      visible={true}
      height="100"
      width="100"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass="text-main justify-content-center"
    />
    </div>
    </Fragment>
  )
}
