import {
    Card,
    Button,
    Form,
    FormLayout,
    Stack,
    TextField,
    Layout,
    Page
} from '@shopify/polaris';

class AnnotatedLayout extends React.Component {
    state = {
        discount: '10%',
    };

    handleSubmit = () => {
        this.setState({
            discount: this.state.discount,
        });
        console.log('submission', this.state);
    };

    handleChange = ( field ) => {
        return ( value ) => this.setState({ [field]: value });
    }

    render() {
        const { discount } = this.state;
        const { 
            handleSubmit,
            handleChange
        } = this;

        return (
            <Page>
                <Layout>
                    <Layout.AnnotatedSection
                        title="Default Discount"
                        description="Add a product, it will be automatically discounted"
                    >
                        <Card sectioned>
                            <Form onSubmit={ handleSubmit }>
                                <FormLayout>
                                    <TextField
                                        value={ discount }
                                        onChange={ handleChange( 'discount' ) }
                                        label="Discount Percentage"
                                        type="discount"
                                    />
                                    <Stack distribution="trailing">
                                        <Button primary submit>
                                            Save
                                        </Button>
                                    </Stack>
                                </FormLayout>
                            </Form>
                        </Card>
                    </Layout.AnnotatedSection>
                </Layout>
            </Page>
        );
    }
}

export default AnnotatedLayout;