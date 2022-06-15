import Table from "react-bootstrap/Table";

const Schedule = () => {
	return (
		<>
			<Table
				striped
				bordered
				hover
				responsive
				style={{ textAlign: "center", verticalAlign: "middle" }}
			>
				<thead>
					<tr>
						<th>คาบที่</th>
						<th>H.R.</th>
						<th>1</th>
						<th>2</th>
						<th>3</th>
						<th>4</th>
						<th>5</th>
						<th>6</th>
						<th>7</th>
						<th>8</th>
						<th>9</th>
					</tr>
					{/* ธรรมดา
					<tr>
						<th>วัน/เวลา</th>
						<th>07.30 - 08.20 น.</th>
						<th>08.20 - 09.15 น.</th>
						<th>09.15 - 10.10 น.</th>
						<th>10.10 - 11.05 น.</th>
						<th>11.05 - 12.00 น.</th>
						<th>12.00 - 12.55 น.</th>
						<th>12.55 - 13.50 น.</th>
						<th>13.50 - 14.45 น.</th>
						<th>14.45 - 15.40 น.</th>
						<th>15.40 - 16.35 น.</th>
					</tr> */}
					<tr>
						<th>วัน/เวลา</th>
						<th>07.30 - 08.00 น.</th>
						<th>08.00 - 08.40 น.</th>
						<th>08.40 - 09.20 น.</th>
						<th>09.20 - 10.00 น.</th>
						<th>10.00 - 10.40 น.</th>
						<th>10.40 - 11.20 น.</th>
						<th>11.20 - 12.00 น.</th>
						<th>12.00 - 12.40 น.</th>
						<th>12.40 - 13.20 น.</th>
						<th>13.20 - 16.35 น.</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>จันทร์</th>
						<th>
							เข้าแถว/
							<br />
							โฮมรูม
						</th>
						<th colSpan={2}>
							ว33191, ว33291 (com3)
							<br />
							คอมพิวเตอร์
							<br />
							อ.เนตรนภา
						</th>
						<th colSpan={2}>
							ว33244 (923)
							<br />
							ชีววิทยา
							<br />
							อ.ประภัสสร
						</th>
						<th rowSpan={5}>พักกลางวัน</th>
						<th>
							ค33101
							<br />
							คณิตศาสตร์
							<br />
							อ.นิภาศิริ
						</th>
						<th>
							ว33205
							<br />
							ฟิสิกส์
							<br />
							อ.พงษ์ณกิจ
						</th>
						<th>ศึกษาค้นคว้า</th>
						<th>
							อ33203
							<br />
							Listening and Speaking
							<br />
							T.Dimitri
						</th>
					</tr>
					<tr>
						<th>อังคาร</th>
						<th>
							เข้าแถว/
							<br />
							โฮมรูม
						</th>
						<th>
							อ33201
							<br />
							Reading and Writing
							<br />
							T.Grandt
						</th>
						<th>
							ส33101
							<br />
							ประวัติศาสตร์
							<br />
							อ.อัมรา
						</th>
						<th>
							อ33101
							<br />
							English
							<br />
							T.Dimitri
						</th>
						<th>
							ว33205
							<br />
							ฟิสิกส์
							<br />
							อ.พงษ์ณกิจ
						</th>
						<th>
							ว33225
							<br />
							เคมี
							<br />
							อ.กฤษณศักดิ์
						</th>
						<th>
							ค33101
							<br />
							คณิตศาสตร์
							<br />
							อ.นิภาศิริ
						</th>
						<th>กิจกรรมนักเรียน</th>
					</tr>
					<tr>
						<th>พุธ</th>
						<th>
							เข้าแถว/
							<br />
							โฮมรูม
						</th>
						<th>
							ค33201
							<br />
							คณิตศาสตร์เพื่มเติม
							<br />
							อ.นิภาศิริ
						</th>
						<th>
							ส33101
							<br />
							ประวัติศาสตร์
							<br />
							อ.อัมรา
						</th>
						<th>
							อ33203
							<br />
							Listening and Speaking
							<br />
							T.Dimitri
						</th>
						<th>
							อ33211
							<br />
							Grammar
							<br />
							อ.ณัฏฐ์ภัค
						</th>
						<th>
							ศ33102 (214)
							<br />
							ดนตรีสากล
							<br />
							อ.สุภัทรา
						</th>
						<th>
							ท33101
							<br />
							วรรณคดีและวรรณกรรม
							<br />
							อ.ภาวินี
						</th>
						<th>ศึกษาค้นคว้า</th>
						<th>
							พ33101
							<br />
							พละศึกษาและสังคมศึกษา
							<br />
							อ.ดนัย, อ.รินทร์ดา
						</th>
					</tr>
					<tr>
						<th>พฤหัสบดี</th>
						<th>
							เข้าแถว/
							<br />
							โฮมรูม
						</th>
						<th>
							ค33201
							<br />
							คณิตศาสตร์เพื่มเติม
							<br />
							อ.นิภาศิริ
						</th>
						<th>
							ก30900
							<br />
							แนะแนว
							<br />
							อ.ศักดินาณันพ์
						</th>
						<th colSpan={2}>
							ว33205 (931)
							<br />
							ฟิสิกส์
							<br />
							อ.พงษ์ณกิจ
						</th>
						<th>
							อ33101
							<br />
							English
							<br />
							T.Dimitri
						</th>
						<th colSpan={2}>วิชาเลือกเสรี ม.6</th>
					</tr>
					<tr>
						<th>ศุกร์</th>
						<th>
							เข้าแถว/
							<br />
							โฮมรูม
						</th>
						<th>
							ค33201
							<br />
							คณิตศาสตร์เพื่มเติม
							<br />
							อ.นิภาศิริ
						</th>
						<th>
							อ33201
							<br />
							Reading and Writing
							<br />
							T.Grandt
						</th>
						<th colSpan={2}>
							ว33225 (913)
							<br />
							เคมี
							<br />
							อ.กฤษณศักดิ์
						</th>
						<th>
							ท33201
							<br />
							ภาษาไทย
							<br />
							อ.ภาวินี
						</th>
						<th>
							ว33244
							<br />
							ชีววิทยา
							<br />
							อ.ประภัสสร
						</th>
						<th>
							กิจกรรมเพื่อสังคมและ
							<br />
							สาธารณประโยชน์
						</th>
					</tr>
				</tbody>
			</Table>
		</>
	);
};

export default Schedule;
