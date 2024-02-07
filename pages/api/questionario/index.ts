import { embaralhar } from '@/functions/arrays'
import quetoes from '../../bancoDeQuestoes'

export default (req, res) => {
    const ids = quetoes.map(questao => questao.id)
    res.status(200).json(embaralhar(ids))
}