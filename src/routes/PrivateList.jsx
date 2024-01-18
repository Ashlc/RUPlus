import Home from "../pages/Home/Home";
import Payment from "../pages/Payment/Payment";
import Verify from "../pages/Verify/Verify";
import AddCredit from "../pages/AddCredit/addcredit";
import InsertCreditCard from "../pages/InsertCreditCard/insertcreditcard";
import Pix from "../pages/Pix/pix";
import Boleto from "../pages/Boleto/boleto";
import WaitingConfirmation from "../pages/WaitingConfirmation/waitingconf";
import User from "../pages/User/User";
import FailedPayment from "../pages/Payment/FailedPayment";
import ChooseMeal from "../pages/Payment/ChooseMeal";
import Extract from "../pages/Extract/Extract";
import Handler from "../pages/Payment/Handler";
import Confirmed from "../pages/Payment/Confirmed";
import DeleteAccount from "../pages/DeleteAccount/DeleteAccount";
import Delete from "../pages/ConfirmDeletion/Delete";
import ChangePassword from "../pages/ChangePassword/Change";
import PrivateRoute from "./PrivateRoute";
import { Route } from 'react-router-dom';

export default function PrivateList() {

    const privateRouteList = [
	{
		path: "/home",
		component: Home,
	},
	{
		path: "/pagamento",
		component: Payment,
	},
	{
		path: "/verificar",
		component: Verify,
	},
	{
		path: "/inserir",
		component: AddCredit,
	},
	{
		path: "/inserir/cartao",
		component: InsertCreditCard,
	},
	{
		path: "/inserir/boleto",
		component: Boleto,
	},
	{
		path: "/inserir/pix",
		component: Pix,
	},
	{
		path: "/confirmar",
		component: WaitingConfirmation,
	},
	{
		path: "/usuario",
		component: User,
	},
	{
		path: "/pagamento/erro",
		component: FailedPayment,
	},
	{
		path: "/pagamento/confirmado",
		component: Confirmed,
	},
	{
		path: "/pagamento/jantar",
		component: ChooseMeal,
	},
	{
		path: "/extrato",
		component: Extract,
	},
	{
		path: "/handler",
		component: Handler,
	},
	{
		path: "/apagar/saque",
		component: DeleteAccount,
	},
	{
		path: "/apagar",
		component: Delete,
	},
	{
		path: "/mudar-senha",
		component: ChangePassword,
	},
];

    return privateRouteList.map((route, index) => (
        <Route
			key={index}
			path={route.path}
			element={
				<PrivateRoute component={route.component}/>
			}
		/>
    ));
}
