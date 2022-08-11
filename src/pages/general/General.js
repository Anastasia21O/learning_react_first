import React, {Component} from "react";
import Layout from "../../components/layout/Layout";
import Main from "../../components/main/Main"

class General extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Main name="sefe"/>
                </Layout>
            </div>
        );
    }
}

export default General;