import { GxSdtData } from "../gxsdt";

describe("Sdt", () => {
  it(`Sdt`, () => {
    const sdt = new GxSdtData();
    sdt.fromJson('{"id": 1, "nombre": "Maria"}');

    expect(sdt.toJson()).toEqual('{"id":1,"nombre":"Maria"}');
    expect(sdt.serialize()).toEqual({ id: 1, nombre: "Maria" });
    expect(sdt.deserialize(sdt)).toEqual({ id: 1, nombre: "Maria" });

    let sdtAux = new GxSdtData();
    expect(sdtAux.deserialize({ id: 1, nombre: "Maria" })).toEqual({
      id: 1,
      nombre: "Maria"
    });

    // ===GXDATE=== //
    // ============ //

    let sdtDate = new GxSdtData();
    sdtDate.fromJson('{"id": 1, "fecha": "2024-12-12"}');
    expect(sdtDate.toJson()).toEqual('{"id":1,"fecha":"2024-12-12"}');
    expect(sdtDate.serialize()).toEqual({ id: 1, fecha: "2024-12-12" });

    let sdtDateAux = new GxSdtData();
    expect(sdtDateAux.deserialize({ id: 1, fecha: "2024-12-12" })).toEqual(
      sdtDate
    );

    // ===GXDATETIME=== //
    // ================ //

    let sdtDateTime = new GxSdtData();
    sdtDateTime.fromJson('{"id": 1, "fecha": "2024-12-12T11:15:37.000"}');
    expect(sdtDateTime.toJson()).toEqual(
      '{"id":1,"fecha":"2024-12-12T11:15:37.000"}'
    );
    expect(sdtDateTime.serialize()).toEqual({
      id: 1,
      fecha: "2024-12-12T11:15:37.000"
    });

    let sdtDateTimeAux = new GxSdtData();
    expect(
      sdtDateTimeAux.deserialize({ id: 1, fecha: "2024-12-12T11:15:37.000" })
    ).toEqual(sdtDateTime);

    // ===GXGUID=== //
    // ============ //

    let sdtGuid = new GxSdtData();
    sdtGuid.fromJson(
      '{"id": 1, "guid": "9bcc27fb-c1ec-43a2-81b9-df01ed477f5d"}'
    );
    expect(sdtGuid.toJson()).toEqual(
      '{"id":1,"guid":"9bcc27fb-c1ec-43a2-81b9-df01ed477f5d"}'
    );
    expect(sdtGuid.serialize()).toEqual({
      id: 1,
      guid: "9bcc27fb-c1ec-43a2-81b9-df01ed477f5d"
    });

    let sdtGuidAux = new GxSdtData();
    expect(
      sdtGuidAux.deserialize({
        id: 1,
        guid: "9bcc27fb-c1ec-43a2-81b9-df01ed477f5d"
      })
    ).toEqual(sdtGuid);
  });
});
