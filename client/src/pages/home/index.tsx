import {Container} from "@/shared/ui/components";
import {Header} from "@/widgets/header";
import {CounterBlock} from "@/entities/counter";
import {counterModel} from '@/entities/counter'
import useActions from "@/shared/hooks/useActions";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";

export default function Home() {
    const {count} = counterModel.selector.useCount()
    const counterActions = counterModel.store.actions
    const dispatch = useAppDispatch()

    const {increment, decrement} = useActions(counterActions, dispatch)

    return (
        <>
            <Container bp={'md'}>
                <Header/>
                <CounterBlock count={count} increment={() => increment(1)} decrement={() => decrement(1)}/>
            </Container>
        </>
    )
}
