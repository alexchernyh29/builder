<template>
	<div class="ui-tiptap2" v-if="editor">
		<div class="control-line">
			<button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
				B
			</button>
			<button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
				I
			</button>
			<button @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
				S
			</button>
			<button @click="editor.chain().focus().toggleUnderline().run()" :class="{ 'is-active': editor.isActive('underline') }">
	  			U
			</button>
			<button @click="editor.chain().focus().toggleHighlight({ color: markColor }).run()" :class="{ 'is-active': editor.isActive('highlight') }">
				Mark
			</button>
			<input type="color" v-model="markColor">
			<button @click="editor.chain().focus().unsetAllMarks().run()">
				clear
			</button>
			<button @click="editor.chain().focus().toggleCode().run()" :disabled="!editor.can().chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
				code
			</button>
			<button @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
				P
			</button>
			<button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
				h3
			</button>
			<button @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
				h4
			</button>
			<button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
				ul
			</button>
			<button @click="editor.chain().focus().toggleSuperscript().run()" :class="{ 'is-active': editor.isActive('superscript') }">
				sup
			</button>
			<button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
				ol
			</button>
			<button @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
				Q
			</button>
			<button @click="editor.chain().focus().setHorizontalRule().run()">
				hr
			</button>
			<button :class="{ 'is-active': editor.isActive('link') }" @click="setLink()">
				Set Link
			</button>
			<button v-if="editor.isActive('link')" @click="editor.chain().focus().unsetLink().run()">
				Unset Link
			</button>
			<!-- <button @click="editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()">
				insertTable
			</button>
			<button @click="editor.chain().focus().addColumnBefore().run()" v-if="editor.can().addColumnBefore()">
				addColumnBefore
			</button>
			<button @click="editor.chain().focus().addColumnAfter().run()" v-if="editor.can().addColumnAfter()">
				addColumnAfter
			</button>
			<button @click="editor.chain().focus().deleteColumn().run()" v-if="editor.can().deleteColumn()">
				deleteColumn
			</button>
			<button @click="editor.chain().focus().addRowBefore().run()" v-if="editor.can().addRowBefore()">
				addRowBefore
			</button>
			<button @click="editor.chain().focus().addRowAfter().run()" v-if="editor.can().addRowAfter()">
				addRowAfter
			</button>
			<button @click="editor.chain().focus().deleteRow().run()" v-if="editor.can().deleteRow()">
				deleteRow
			</button>
			<button @click="editor.chain().focus().deleteTable().run()" v-if="editor.can().deleteTable()">
				deleteTable
			</button>
			<button @click="editor.chain().focus().mergeCells().run()" v-if="editor.can().mergeCells()">
				mergeCells
			</button>
			<button @click="editor.chain().focus().splitCell().run()" v-if="editor.can().splitCell()">
				splitCell
			</button>
			<button @click="editor.chain().focus().toggleHeaderColumn().run()" v-if="editor.can().toggleHeaderColumn()">
				toggleHeaderColumn
			</button>
			<button @click="editor.chain().focus().toggleHeaderRow().run()" v-if="editor.can().toggleHeaderRow()">
				toggleHeaderRow
			</button>
			<button @click="editor.chain().focus().toggleHeaderCell().run()" v-if="editor.can().toggleHeaderCell()">
				toggleHeaderCell
			</button>
			<button @click="editor.chain().focus().mergeOrSplit().run()" v-if="editor.can().mergeOrSplit()">
				mergeOrSplit
			</button>
			<button @click="editor.chain().focus().setCellAttribute('backgroundColor', '#FAF594').run()" v-if="editor.can().setCellAttribute('backgroundColor', '#FAF594')">
				setCellAttribute
			</button>
			<button @click="editor.chain().focus().fixTables().run()" v-if="editor.can().fixTables()">
				fixTables
			</button>
			<button @click="editor.chain().focus().goToNextCell().run()" v-if="editor.can().goToNextCell()">
				goToNextCell
			</button>
			<button @click="editor.chain().focus().goToPreviousCell().run()" v-if="editor.can().goToPreviousCell()">
				goToPreviousCell
			</button> -->
		</div>
		<EditorContent class="editor-css" :editor="editor" />
	</div>
</template>
<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Superscript from '@tiptap/extension-superscript'
import Highlight from '@tiptap/extension-highlight'
import Underline from '@tiptap/extension-underline'
// import Table from '@tiptap/extension-table'
// import TableCell from '@tiptap/extension-table-cell'
// import TableHeader from '@tiptap/extension-table-header'
// import TableRow from '@tiptap/extension-table-row'
import Gapcursor from '@tiptap/extension-gapcursor'

const props = defineProps({
	modelValue: {
		type: String,
		default: '',
	}
})

const markColor = ref("#c0c0c0")

// const CustomTableCell = TableCell.extend({
//   addAttributes() {
//     return {
//       // extend the existing attributes …
//       ...this.parent?.(),

//       // and add a new one …
//       backgroundColor: {
//         default: null,
//         parseHTML: element => element.getAttribute('data-background-color'),
//         renderHTML: attributes => {
//           return {
//             'data-background-color': attributes.backgroundColor,
//             style: `background-color: ${attributes.backgroundColor}`,
//           }
//         },
//       },
//     }
//   },
// })

const emit = defineEmits(['update:modelValue'])
const editor = useEditor({
	content: props.modelValue,
	extensions: [
		StarterKit,
		Superscript,
		Underline,
		Highlight.configure({
			multicolor: true,
		}),
		Link.configure({
			HTMLAttributes: {
				class: 'tip-tap-custom-link',
			}
		}),
		// Table.configure({
        //   resizable: true,
        // }),
        // TableRow,
        // TableHeader,
        // CustomTableCell,
		Gapcursor,
	],
	editable: true,
	injectCSS: false,
	onUpdate: () => {
		emit('update:modelValue', editor.value.getHTML())
		// TODO: добавить тут санитайзер DOMPurify, чтобы на v-html не словить уязвимость
	},
	editorProps: {
		attributes: {
			spellcheck: 'false',
		},
	},
})

const setLink = function () {
	const previousUrl = editor.value.getAttributes('link').href
	const url = window.prompt('URL', previousUrl)

	// cancelled
	if (url === null) {
		return
	}

	// empty
	if (url === '') {
		editor.value
			.chain()
			.focus()
			.extendMarkRange('link')
			.unsetLink()
			.run()

		return
	}

	// update link
	editor.value
		.chain()
		.focus()
		.extendMarkRange('link')
		.setLink({ href: url, target: '_self' })
		.run()
};
watch(() => props.modelValue, (newValue, oldValue) => {
	const isSame = editor.value.getHTML() === newValue
	if (isSame) { return }
	editor.value.commands.setContent(newValue, false)
})

onUnmounted(() => { editor.value.destroy() })
</script>
<style scoped>
.ui-tiptap2 {
	padding-top: 24px;
	border: 1px solid black;
	border-radius: 0.3rem;
	padding: 0.4rem 0.4rem;
}
.ui-tiptap2 .control-line {

	position: sticky;
	top: 0;
	background: white;
	padding: 8px;
}
.ui-tiptap2 .control-line > button,
.ui-tiptap2 .control-line > input {
	font-size: inherit;
	font-family: inherit;
	color: #000;
	margin: 0.1rem;
	border: 1px solid black;
	border-radius: 0.3rem;
	padding: 0.1rem 0.4rem;
	background: white;
	accent-color: black;
}
.ui-tiptap2 .control-line > input {
	block-size: 23px;
}
.ui-tiptap2 .control-line > button.is-active {
	background: black;
	color: #fff;
}


</style>
