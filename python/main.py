from janome.tokenizer import Tokenizer
import sys

text = sys.argv[1]
splited_text = Tokenizer().tokenize(text, wakati=True)
print(splited_text)