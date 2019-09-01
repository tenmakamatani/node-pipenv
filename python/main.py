from janome.tokenizer import Tokenizer
import sys

text = '私の名前はてんまです'
splited_text = Tokenizer().tokenize(text, wakati=True)
print(splited_text)