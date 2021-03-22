import { useRouter } from 'next/router'

function RecipePage() {
    const router = useRouter();
    return (
        <div>Recipe id: {router.query.id}</div>
    )
}

export default RecipePage