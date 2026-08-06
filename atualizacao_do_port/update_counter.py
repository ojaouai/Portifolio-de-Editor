from pathlib import Path

counter = Path("counter.txt")

valor = int(counter.read_text())

valor += 1

counter.write_text(str(valor))from pathlib import Path

counter = Path("counter.txt")

valor = int(counter.read_text())

valor += 1

counter.write_text(str(valor))
