from pathlib import Path

counter = Path(__file__).parent / "counter.txt"

if not counter.exists():
    counter.write_text("0")

valor = int(counter.read_text())

valor += 1

counter.write_text(str(valor))

print(f"Contador atualizado: {valor}")