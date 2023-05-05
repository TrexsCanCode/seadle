import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the sequence of sea creature emojis in 6 tries. Sea creatures emojis may occur more than once, but never next to itself.
        After each guess, the color of the tiles will change to show how close your guess was to the solution.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="🐡"
          status="correct"
        />
        <Cell value="🐢" />
        <Cell value="🦑" />
        <Cell value="🐊" />
        <Cell value="🐋" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The 🐡 is in the solution and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="🐠" />
        <Cell value="🦑" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="🐢"
          status="present"
        />
        <Cell value="🦀" />
        <Cell value="🐠" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The 🐢 is in the solution but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="🦈" />
        <Cell value="🐢" />
        <Cell value="🦑" />
        <Cell isRevealing={true} isCompleted={true} value="🦐" status="absent" />
        <Cell value="🦀" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The 🐙 is not in the solution in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/trexscancode/seadle"
          className="underline font-bold"
        >
          check out the code here
        </a>, forked from the original clone{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >here</a>{' '}
      </p>
    </BaseModal>
  )
}
