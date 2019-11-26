import { 
  Page,
  Layout,
  EmptyState,
  TextStyle 
} from '@shopify/polaris';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => (
  <Page>
    <Layout>
      <EmptyState
        heading="Discount your products!"
        action={{
          content: 'Select Products',
          onAction: () => console.log('clicked'),
        }}
        image={img}
      >
        <p>Select Products and change their prices temporarily</p>
      </EmptyState>
    </Layout>
  </Page>
)

export default Index;
