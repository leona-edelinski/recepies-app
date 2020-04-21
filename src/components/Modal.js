import React, { useEffect } from 'react'
import PropTypes from 'prop-types';

export const Modal = ({ onClick, children, title }) => {

    useEffect(() => {
        // body nonscrollable on opening the modal
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    return (
        <div onClick={onClick} className='modal-backdrop'>
            <div onClick={e => e.stopPropagation()} className="modal-body">
                <h4 className="modal-title">{title}</h4>
                {children}
            </div>
        </div >
    )
}

export default Modal

Modal.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.element.isRequired,
    title: PropTypes.string
};