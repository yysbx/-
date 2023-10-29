import React from "react";

class Left extends React.Component {
    doNotebookClick(index) {
        this.props.doNotebookClick(index)
    }
    doAdd() {
        this.props.doAdd()
    }

    render() {
        return (
            <div className="app-left">
                <div className="app-left-header">
                    <i className="notebook-icon iconfont icon-jiahao"></i>
                    <span className="add-notebook">新建笔记</span>
                </div>
                <div className="app-left-body">
                    <div className="app-left-body-title">
                        <i className="notebiik-icon iconfont icon-bijiben"></i>
                        <span>笔记本</span>

                        <ul className="notebook-list">
                            {this.props.notebooks.map((notebook, index) => {
                                return (
                                    <li key={notebook.id}
                                        className={this.props.currentIndex === index ? "active" : ""}
                                    >
                                        <i className="iconfont icon-bijiben1"></i>{notebook.name}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <li key={notebook.id}
                    onClick={() => this.doNotebookClick(index)}
                />
            </div >
        )
    }
}
export default Left