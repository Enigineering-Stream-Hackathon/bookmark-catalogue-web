import { renderHook, act } from "@testing-library/react-hooks";
import useInput from "../../url/hooks/use-input";

test("allows to maintain the state of the form", () => {
  const { result } = renderHook(() =>
    useInput({
      title: "Card title",
      description: "card description",
      longUrl: "http://longurl",
    })
  );

  expect(result.current.value.title).toEqual("Card title");
  expect(result.current.value.description).toEqual("card description");
  expect(result.current.value.longUrl).toEqual("http://longurl");

  act(() => {
    result.current.setValue({
      title: "Card title2",
      description: "card description2",
      longUrl: "http://longurl2",
    });
  });

  expect(result.current.value.title).toEqual("Card title2");
  expect(result.current.value.description).toEqual("card description2");
  expect(result.current.value.longUrl).toEqual("http://longurl2");
});
